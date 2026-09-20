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
		"content": `<style>.szyk3h30a {
  fill: currentColor;
  d: path("M5 20q-.639 0-.908-.57t.127-1.065L10 11.346V5H8.616q-.213 0-.357-.144t-.143-.357t.143-.356T8.616 4h6.769q.212 0 .356.144t.144.357t-.144.356t-.356.143H14v6.346l5.78 7.02q.397.494.128 1.064T19 20zm2-2h10l-3.4-4h-3.2z");
}
</style><path class="szyk3h30a"/>`,
		"fallback": "material-symbols-light:experiment",
	});
}

export default Component;
