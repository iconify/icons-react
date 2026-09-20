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
		"content": `<style>.lvxojhsim {
  fill: currentColor;
  d: path("M12 13V4h6v9zm6 5H8L5 8V4h2v4l2.5 8H18zM8 21v-2h10v2z");
}
</style><path class="lvxojhsim"/>`,
		"fallback": "material-symbols:flight-class-sharp",
	});
}

export default Component;
