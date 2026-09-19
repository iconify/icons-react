import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.spwoljbdp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M26.989 19.498L29.09 5.92c.194-1.25-1.4-1.941-2.18-.946L10.894 25.39a.9.9 0 0 0 .708 1.455h8.302l.943-6.085a1.49 1.49 0 0 1 1.473-1.262zm-5.523 9.004L19.363 42.08c-.193 1.25 1.4 1.941 2.18.946l15.47-19.718c.685-.873.063-2.151-1.047-2.151H28.55l-.943 6.084a1.49 1.49 0 0 1-1.473 1.262z");
}
</style><path class="spwoljbdp"/>`,
		"fallback": "arcticons:flash-2",
	});
}

export default Component;
