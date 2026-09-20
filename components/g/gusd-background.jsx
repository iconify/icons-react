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

.mvwy5iifd {
  fill: var(--svg-color--24ddf9, #24ddf9);
  d: path("M24 0H0v24h24z");
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}

.tzm-6wbqd {
  fill: var(--svg-color--000, #000);
  d: path("M14.457 4C11.642 4 9.3 6.214 9 9c-2.787.301-5 2.642-5 5.456A5.546 5.546 0 0 0 9.543 20c2.814 0 5.166-2.214 5.457-5c2.787-.301 5-2.642 5-5.456A5.547 5.547 0 0 0 14.457 4M19 10c-.276 1.812-2.185 3.723-4 4v-4zM5 14c.273-1.822 2.179-3.722 4-4v4zm9 1c-.305 2.07-2.367 4.002-4.457 4c-2.103.002-4.237-1.925-4.543-4zm0-5v4h-4v-4zm5-1h-9c.306-2.079 2.356-4.002 4.457-4c2.1-.002 4.236 1.922 4.543 4");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="mvwy5iifd"/><path class="tzm-6wbqd"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:gusd-background",
	});
}

export default Component;
