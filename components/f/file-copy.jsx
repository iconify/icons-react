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
		"content": `<style>.wns3a8tss {
  fill: currentColor;
  d: path("M4.616 22q-.691 0-1.153-.462T3 20.385V8h1v12.385q0 .23.192.423t.423.192H14v1zm4-4q-.691 0-1.153-.462T7 16.384V3.616q0-.691.463-1.153T8.616 2H15.5L20 6.5v9.885q0 .69-.462 1.153T18.384 18zM15 7h4l-4-4z");
}
</style><path class="wns3a8tss"/>`,
		"fallback": "material-symbols-light:file-copy",
	});
}

export default Component;
