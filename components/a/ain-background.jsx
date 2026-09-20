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
		"content": `<style>.fcfim59ko {
  fill: var(--svg-color--663fbc, #663fbc);
  d: path("M24 0H0v24h24z");
}

.ft5dv1b6b {
  fill: none;
}

.p70c38qte {
  fill: var(--svg-color--fff, #fff);
  d: path("M11.467 4v5.253l-3.291 4.88H4V13.6L10.933 4zM12 4v5.248l3.504 4.885H20V13.6L12.533 4zm8 10.667h-4.112L19.712 20H20zM19.056 20l-3.824-5.333H8.459L4.864 20zM4.224 20l3.595-5.333H4V20zm4.597-5.867l2.918-4.33l3.109 4.33z");
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="fcfim59ko"/><path class="p70c38qte"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:ain-background",
	});
}

export default Component;
