import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.bqxrd5bpe {
  fill: currentColor;
  d: path("M5.998 3a2 2 0 0 0-1.732 1h9.732a3 3 0 0 1 3 3v6.5a.5.5 0 1 0 1 0V7a4 4 0 0 0-4-4zM2 7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8.5a.5.5 0 0 1-1 0V8H2zm0 2h7v5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm2.5 1.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z");
}
</style><path class="bqxrd5bpe"/>`,
		"fallback": "fluent:desk-multiple-20-filled",
	});
}

export default Component;
