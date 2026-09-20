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

.mumfproca {
  fill: var(--svg-color--000, #000);
  d: path("M24 0H0v24h24z");
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}

.xmhibv03r {
  fill: var(--svg-color--fff, #fff);
  d: path("m17.5 4l-.55 1.47c-1.425 3.625-2.53 5.35-3.7 5.35c-.725 0-1.245-.34-1.75-.815c-.375-.355-.53-.445-.89-.445c-.185 0-.52.25-.95.825A14 14 0 0 0 8.18 13h5.04l-.72 1.5H8V20H6.5V4zm-2 1.5L8 5.485v5.335c.94-1.69 2.435-3.61 4.31-1.905c.275.255.53.55.935.55c.33 0 1.16-1.265 2.255-3.965");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="mumfproca"/><path class="xmhibv03r"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:front-background",
	});
}

export default Component;
