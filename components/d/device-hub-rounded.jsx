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
		"content": `<style>.ou7uv304w {
  fill: currentColor;
  d: path("M4 19.2v-2.4q0-.34.232-.57t.576-.23h2.577l4.115-4.115V8.992q-.861-.229-1.43-.895q-.57-.666-.57-1.558q0-1.042.729-1.771q.728-.73 1.769-.73t1.771.73t.731 1.77q0 .893-.57 1.559q-.568.667-1.43.895v2.893L16.616 16h2.576q.344 0 .576.23t.232.57v2.4q0 .34-.23.57t-.57.23h-2.4q-.34 0-.57-.232t-.23-.576v-2.357l-4-4l-4 4v2.357q0 .344-.23.576T7.2 20H4.8q-.34 0-.57-.23T4 19.2");
}
</style><path class="ou7uv304w"/>`,
		"fallback": "material-symbols-light:device-hub-rounded",
	});
}

export default Component;
