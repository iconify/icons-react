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
		"content": `<style>.hx_xgtbon {
  fill: currentColor;
  d: path("m2.707 2.293l19 19a.999.999 0 1 1-1.414 1.414L18.586 21H5a3 3 0 0 1-3-3V9c0-1.204.717-2.291 1.825-2.761L1.293 3.707a.999.999 0 1 1 1.414-1.414M21.923 18.68L7.914 4.672l.379-.379C9.008 3.578 9.961 3 11 3h2c1.039 0 1.992.578 2.707 1.293L17.414 6H19a3 3 0 0 1 3 3v9q0 .345-.077.68m-7.891-2.234l-1.514-1.513a2 2 0 0 1-1.931-.518a2 2 0 0 1-.52-1.933l-1.513-1.514a4.002 4.002 0 0 0 5.478 5.478");
}
</style><path class="hx_xgtbon"/>`,
		"fallback": "coolicons:camera-off-fill",
	});
}

export default Component;
