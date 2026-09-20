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
		"content": `<style>.qw3mmsbzw {
  fill: currentColor;
  d: path("M4 18.95V2l10 4.025V22.95zM16 19V4.65L9.45 2H20v17z");
}
</style><path class="qw3mmsbzw"/>`,
		"fallback": "material-symbols:dual-screen-sharp",
	});
}

export default Component;
