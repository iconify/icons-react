import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.fbh2bdp2z {
  fill: currentColor;
  d: path("M5.5 12.5q-.213 0-.356-.144T5 11.999t.144-.356t.356-.143h13q.213 0 .356.144t.144.357t-.144.356t-.356.143z");
}
</style><path class="fbh2bdp2z"/>`,
		"fallback": "material-symbols-light:horizontal-rule-outline-rounded",
	});
}

export default Component;
