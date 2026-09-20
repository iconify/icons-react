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
		"content": `<style>.icy9zxs8u {
  fill: currentColor;
  d: path("M20.416 22.523L17.892 20H4V6.108L1.477 3.585l.714-.714L21.129 21.81zM20 17.831l-4.423-4.423L19 9.596v-1.5l-4.136 4.598L6.169 4H20zM5 16.219l4.23-4.23L13.243 16l.3-.35l-4.7-4.7L5 14.792z");
}
</style><path class="icy9zxs8u"/>`,
		"fallback": "material-symbols-light:bid-landscape-disabled-sharp",
	});
}

export default Component;
