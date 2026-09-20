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
		"content": `<style>.jt7mxsbsd {
  fill: currentColor;
  d: path("M17.015 6.411a7.503 7.503 0 0 1 4.343 10.263c.253 1.008.51 2.1.672 2.803a1.244 1.244 0 0 1-1.468 1.5a135 135 0 0 1-2.913-.64a7.5 7.5 0 0 1-3.088.663a7.47 7.47 0 0 1-5.1-2h.1c.719 0 1.416-.09 2.082-.257a6 6 0 0 0 2.919.757c.96 0 1.866-.225 2.67-.625l.243-.121l.264.062c.922.22 1.965.447 2.74.61c-.175-.75-.414-1.755-.642-2.65l-.07-.276l.13-.253a6 6 0 0 0 .665-2.747a6 6 0 0 0-2.748-5.042a8.4 8.4 0 0 0-.8-2.047M9.5 3a7.5 7.5 0 1 1-3.089 14.336c-1.258.29-2.613.54-3.236.651a.996.996 0 0 1-1.154-1.17c.118-.608.38-1.917.682-3.142A7.5 7.5 0 0 1 9.5 3m-2 8A1.5 1.5 0 0 0 6 12.5C6 14 7.5 15 9.5 15s3.5-1 3.5-2.5a1.5 1.5 0 0 0-1.5-1.5zm2-5a2 2 0 1 0 0 4a2 2 0 0 0 0-4");
}
</style><path class="jt7mxsbsd"/>`,
		"fallback": "fluent:chat-multiple-person-24-filled",
	});
}

export default Component;
