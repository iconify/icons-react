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
		"content": `<style>.ohjq7v2mn {
  fill: currentColor;
  d: path("m12 12.727l-3.592 3.592q-.16.16-.354.15T7.7 16.3t-.16-.364q0-.203.16-.363L11.273 12L7.681 8.433q-.16-.16-.15-.364t.169-.363t.364-.16q.203 0 .363.16L12 11.298l3.567-3.592q.16-.16.354-.16t.354.16q.166.165.166.366t-.166.36L12.702 12l3.592 3.592q.16.16.16.354t-.16.354q-.165.166-.366.166t-.36-.166z");
}
</style><path class="ohjq7v2mn"/>`,
		"fallback": "material-symbols-light:close-small-outline-rounded",
	});
}

export default Component;
