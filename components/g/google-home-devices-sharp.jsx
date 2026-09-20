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
		"content": `<style>.rr5qiqbwn {
  fill: currentColor;
  d: path("M8.5 20v-2H3V4h18v3.23h-1V5H4v12h7.385v3zm7.27-5.23q.582-.581 1.422-.581t1.423.581t.581 1.422t-.582 1.423t-1.422.581t-1.422-.582t-.581-1.422q0-.84.581-1.422M21 9v11h-7.615V9zm-4.72 1.207q-.357.36-.357.911t.36.909t.912.358t.909-.36q.357-.361.357-.912t-.36-.91q-.36-.357-.911-.357q-.552 0-.91.36m3.015 8.092q.859-.856.859-2.103t-.856-2.105q-.856-.86-2.103-.86t-2.106.857t-.858 2.103t.856 2.105t2.102.859t2.106-.856");
}
</style><path class="rr5qiqbwn"/>`,
		"fallback": "material-symbols-light:google-home-devices-sharp",
	});
}

export default Component;
