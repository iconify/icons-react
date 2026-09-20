import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.fwxtrju6n {
  fill: currentColor;
  d: path("M3 3h2v2.085A1.5 1.5 0 0 0 3.085 7H1V5a2 2 0 0 1 2-2m3 5.707l1.146 1.147a.5.5 0 0 0 .708-.708L6.707 8H15v3a2 2 0 0 1-2 2H6zM4.293 8L3.146 9.146a.5.5 0 1 0 .708.708L5 8.707V13H3a2 2 0 0 1-2-2V8zm3.622-1q.084-.236.085-.5a1.5 1.5 0 0 0-2-1.415V3h7a2 2 0 0 1 2 2v2zM6 6.5V7h.5a.5.5 0 1 0-.5-.5m-1 0V7h-.5a.5.5 0 1 1 .5-.5");
}
</style><path class="fwxtrju6n"/>`,
		"fallback": "fluent:gift-card-16-filled",
	});
}

export default Component;
