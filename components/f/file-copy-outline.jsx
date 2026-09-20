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
		"content": `<style>.ag74tjx3k {
  fill: currentColor;
  d: path("M18.385 18h-9.77q-.69 0-1.152-.462T7 16.384V3.616q0-.691.463-1.153T8.616 2H15.5L20 6.5v9.885q0 .69-.462 1.153T18.384 18M15 7V3H8.616q-.231 0-.424.192T8 3.616v12.769q0 .23.192.423t.423.192h9.77q.23 0 .423-.192t.192-.424V7zM4.616 22q-.691 0-1.153-.462T3 20.385V8h1v12.385q0 .23.192.423t.423.192H14v1zM8 3v4zv14z");
}
</style><path class="ag74tjx3k"/>`,
		"fallback": "material-symbols-light:file-copy-outline",
	});
}

export default Component;
