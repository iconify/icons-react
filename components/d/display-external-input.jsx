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
		"content": `<style>.up6xdcbut {
  fill: currentColor;
  d: path("m17.442 21.789l-.713-.714L18.809 19h-4.867v-1h4.887l-2.094-2.1l.707-.688l3.289 3.288zM5.616 20q-.691 0-1.153-.462T4 18.384V15h1v3.385q0 .23.192.423t.423.192H9v1zM4 9V5.616q0-.691.463-1.153T5.616 4H9v1H5.616q-.231 0-.424.192T5 5.616V9zm15 0V5.616q0-.231-.192-.424T18.384 5H15V4h3.385q.69 0 1.152.463T20 5.616V9z");
}
</style><path class="up6xdcbut"/>`,
		"fallback": "material-symbols-light:display-external-input",
	});
}

export default Component;
