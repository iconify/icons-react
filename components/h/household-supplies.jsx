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
		"content": `<style>.hitcvf1qo {
  fill: currentColor;
  d: path("M8.077 20.23q-.421 0-.71-.289q-.29-.289-.29-.71v-4.3q0-1.85.621-3.65q.621-1.798 1.977-3.556l-.75.077q-.758.006-1.341-.535Q7 6.727 7 5.957v-.991q0-.816.682-1.35q.681-.533 1.48-.466l8.169.779q.31.03.49.25t.179.519v1.571q0 .298-.205.528t-.503.26l-.784.082q.311 1.09.79 1.969t1.164 1.361l-.5.866q-.922-.622-1.512-1.725q-.59-1.102-.92-2.393l-2.407.235q.123 1.365.724 2.727t1.445 2.752q.412.685.598 1.435q.187.75.187 1.515v3.35q0 .421-.29.71q-.289.29-.71.29zM8 5.1v.78q0 .45.325.726t.775.225l7.9-.75V4.9l-7.9-.75q-.45-.05-.775.225T8 5.1");
}
</style><path class="hitcvf1qo"/>`,
		"fallback": "material-symbols-light:household-supplies",
	});
}

export default Component;
