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
		"content": `<style>.c4tau9bzq {
  fill: var(--svg-color--03316c, #03316c);
  d: path("M24 0H0v24h24z");
}

.ft5dv1b6b {
  fill: none;
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}

.t80p5ac0o {
  fill: var(--svg-color--fff, #fff);
  d: path("M14.736 16.878h-.99l-1.175-1.085v-.556l1.22-1.162v-1.851l1.596-1.041l1.82 1.373zM10.65 13.96l.185-1.737l-.6-1.557h3.53l-.587 1.557l.166 1.737zm.804 1.832l-1.175 1.099H9.277l-2.484-4.335l1.833-1.36l1.609 1.027v1.852l1.22 1.162zm-2.19-8.331h5.46l.65 2.777H8.626zM11.997 4L5.069 8.003v8L11.997 20l6.934-3.997v-8z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="c4tau9bzq"/><path class="t80p5ac0o"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:crypto-com-background",
	});
}

export default Component;
