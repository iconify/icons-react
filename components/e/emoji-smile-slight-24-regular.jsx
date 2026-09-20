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
		"content": `<style>.ngx-f87vv {
  fill: currentColor;
  d: path("M10.25 10a1.25 1.25 0 1 0-2.499 0a1.25 1.25 0 0 0 2.499 0m6 0a1.25 1.25 0 1 0-2.499 0a1.25 1.25 0 0 0 2.499 0m-6.114 5.106a.75.75 0 0 0-.772 1.286c.767.46 1.72.67 2.636.67s1.87-.21 2.636-.67a.75.75 0 1 0-.772-1.286c-.483.29-1.154.456-1.864.456s-1.38-.166-1.864-.456M22.002 12c0-5.524-4.478-10.002-10.002-10.002S2 6.476 2 12c-.001 5.523 4.476 10 10 10s10.002-4.477 10.002-10M3.499 12a8.502 8.502 0 1 1 17.003 0a8.502 8.502 0 0 1-17.003 0");
}
</style><path class="ngx-f87vv"/>`,
		"fallback": "fluent:emoji-smile-slight-24-regular",
	});
}

export default Component;
