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
		"content": `<style>.v_9os6wva {
  fill: currentColor;
  d: path("m21 18.189l-6.996-6.997H20V8.808h-8.38L7.811 5H21zM4 11.192h5.766L7.38 8.808H4zm17.104 11.339L17.573 19H3V5h2l1 1H4.573L1.881 3.308l.713-.714l19.223 19.223z");
}
</style><path class="v_9os6wva"/>`,
		"fallback": "material-symbols-light:credit-card-off-sharp",
	});
}

export default Component;
