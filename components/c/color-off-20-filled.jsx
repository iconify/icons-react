import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.yf1wynb1b {
  fill: currentColor;
  d: path("M2.146 2.146a.5.5 0 0 1 .707 0l15 15a.5.5 0 0 1-.707.707l-1.856-1.856a8 8 0 0 1-1.902 1.252a3.77 3.77 0 0 1-3.291-.059c-.973-.503-1.696-1.467-1.648-2.731c.017-.445.082-.867.143-1.243c.063-.387.118-.712.136-1.015c.018-.297-.004-.533-.078-.732c-.07-.191-.2-.381-.45-.569c-.313-.234-.58-.275-.845-.237c-.3.043-.614.188-1.014.387c-.735.365-1.776.942-2.974.332c-1.102-.562-1.424-1.868-1.22-2.917a8 8 0 0 1 1.855-3.756L2.146 2.854a.5.5 0 0 1 0-.708m10.165 10.872a1 1 0 1 0 1.17 1.17zM10 2a8 8 0 0 1 6.616 12.495l-2.002-2.002a1 1 0 1 0-1.108-1.108L5.504 3.383A7.96 7.96 0 0 1 10 2m4.5 5.5a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-2-2.5a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-3-1a1 1 0 1 0 0 2a1 1 0 0 0 0-2");
}
</style><path class="yf1wynb1b"/>`,
		"fallback": "fluent:color-off-20-filled",
	});
}

export default Component;
