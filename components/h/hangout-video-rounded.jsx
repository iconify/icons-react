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
		"content": `<style>.rb5_s3xva {
  fill: currentColor;
  d: path("M7.73 15.385h5.155q.348 0 .578-.23t.23-.578v-1.892l2.39 1.917q.298.242.646.071t.348-.55V9.877q0-.379-.348-.55t-.646.071l-2.39 1.918V9.423q0-.348-.23-.578t-.578-.23H7.73q-.348 0-.578.23t-.23.578v5.154q0 .348.23.578t.578.23M4.616 19q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h14.77q.69 0 1.152.463T21 6.616v10.769q0 .69-.463 1.153T19.385 19z");
}
</style><path class="rb5_s3xva"/>`,
		"fallback": "material-symbols-light:hangout-video-rounded",
	});
}

export default Component;
