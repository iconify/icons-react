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
		"content": `<style>.fa11nrbnk {
  fill: var(--svg-color--fff, #fff);
  d: path("M4.865 17.133A9.009 9.009 0 0 1 20 7.6l-.793.66a7.979 7.979 0 0 0-13.41 8.44zm13.158-7.881a6.435 6.435 0 1 0-5.24 10.476v-1.03a5.406 5.406 0 1 1 4.447-8.787zm-1.977 1.647a3.855 3.855 0 0 0-6.888 2.399a3.861 3.861 0 0 0 6.641 2.677l-.648-.808a2.826 2.826 0 0 1-4.963-1.87a2.832 2.832 0 0 1 5.07-1.734l.788-.659z");
}

.ft5dv1b6b {
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
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="mumfproca"/><path class="fa11nrbnk"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:cfg-background",
	});
}

export default Component;
