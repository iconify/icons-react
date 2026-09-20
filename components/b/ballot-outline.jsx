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
		"content": `<style>.sin_skhak {
  fill: currentColor;
  d: path("M12 10h4.616V9H12zm0 5h4.616v-1H12zm-2.126-4.626q.357-.357.357-.874t-.357-.874T9 8.269t-.874.357t-.357.874t.357.874t.874.357t.874-.357m0 5q.357-.357.357-.874t-.357-.874T9 13.269t-.874.357t-.357.874t.357.874t.874.357t.874-.357M5.616 20q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h12.769q.69 0 1.153.463T20 5.616v12.769q0 .69-.462 1.153T18.384 20zm0-1h12.769q.23 0 .423-.192t.192-.424V5.616q0-.231-.192-.424T18.384 5H5.616q-.231 0-.424.192T5 5.616v12.769q0 .23.192.423t.423.192M5 5v14z");
}
</style><path class="sin_skhak"/>`,
		"fallback": "material-symbols-light:ballot-outline",
	});
}

export default Component;
