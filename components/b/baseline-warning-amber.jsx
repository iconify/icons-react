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
		"content": `<style>.g8-_i_47b {
  fill: currentColor;
  d: path("M12 5.99L19.53 19H4.47zM12 2L1 21h22z");
}

.ijfk2hwes {
  fill: currentColor;
  d: path("M13 16h-2v2h2zm0-6h-2v5h2z");
}
</style><path class="g8-_i_47b"/><path class="ijfk2hwes"/>`,
		"fallback": "ic:baseline-warning-amber",
	});
}

export default Component;
