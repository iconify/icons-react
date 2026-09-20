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
		"content": `<style>.cdtcr3hdv {
  fill: currentColor;
  d: path("M22.453 1.923a.75.75 0 0 1 0 1.06L16.14 9.296a6.8 6.8 0 0 0-1.068-1.053l6.32-6.32a.75.75 0 0 1 1.061 0M15.03 9.347a5.75 5.75 0 0 0-8.132 0l-.244.244l8.132 8.132l.244-.244a5.75 5.75 0 0 0 0-8.132M1.885 12.966l3.613-2.409l8.32 8.321l-2.408 3.613a.75.75 0 0 1-1.154.115L1.77 14.12a.75.75 0 0 1 .115-1.154");
}
</style><path class="cdtcr3hdv"/>`,
		"fallback": "fluent:broom-24-filled",
	});
}

export default Component;
