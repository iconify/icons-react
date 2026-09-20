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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}

.vkjvk1_iz {
  fill: var(--svg-color--fff, #fff);
  d: path("m14.5 5.37l2-1.12l2 1.13v2.25l-2 1.12l-.005-.01L14.5 7.62zM7.75 19.75l-3.75-2v-4l3.75-2l3.75 2v4zm12.25-6l-3.75-2l-3.75 2v4l3.75 2l3.75-2zM8.5 6.87l3.495-1.875l1.505.755v2.205l2 1.295v1.365L12 12.49l-3.5-1.875v-3.75z");
}

.ytioeq3te {
  fill: var(--svg-color--d66700, #d66700);
  d: path("M24 0H0v24h24z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="ytioeq3te"/><path class="vkjvk1_iz"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:bzz-background",
	});
}

export default Component;
