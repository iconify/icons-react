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

.oeglc4_km {
  fill: var(--svg-color--e95b4d, #e95b4d);
  d: path("M24 0H0v24h24z");
}

.ou-dvubzf {
  fill: var(--svg-color--fff, #fff);
  d: path("M10.483 5.208a.6.6 0 0 0-.606-.313l-2.81.474c-.238.038-.342.237-.242.45l6.218 12.972a.61.61 0 0 0 .611.313l2.806-.474c.237-.038.341-.237.242-.45zm-.379 9.37c0-.204-.17-.346-.384-.313l-2.545.408a.464.464 0 0 0-.388.436v4.574c0 .203.175.345.388.312l2.545-.407a.465.465 0 0 0 .384-.436zm7.109-10.256c0-.208-.17-.35-.384-.317l-2.55.407a.464.464 0 0 0-.383.436v4.574c0 .204.17.346.384.313l2.55-.408a.464.464 0 0 0 .383-.436V4.318z");
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="oeglc4_km"/><path class="ou-dvubzf"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:alph-background",
	});
}

export default Component;
