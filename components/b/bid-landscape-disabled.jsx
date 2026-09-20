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
		"content": `<style>.miovc8bzb {
  fill: currentColor;
  d: path("M20.416 22.523L17.892 20H5.616q-.691 0-1.153-.462T4 18.384V6.108L1.477 3.585l.714-.714L21.129 21.81zM20 17.831l-4.423-4.423L19 9.596v-1.5l-4.136 4.598L6.169 4h12.216q.69 0 1.153.463T20 5.616zM5 16.219l4.23-4.23L13.243 16l.3-.35l-4.7-4.7L5 14.792z");
}
</style><path class="miovc8bzb"/>`,
		"fallback": "material-symbols-light:bid-landscape-disabled",
	});
}

export default Component;
