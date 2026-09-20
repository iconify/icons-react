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
		"content": `<style>.bkxrps3ph {
  fill: currentColor;
  d: path("M15 7.808h4zm-10 0h9.046h-.834h.311zm.38-1H18.6L17.077 5H6.904zM10 12.962l2-1l2 1V7.808h-4zM14.03 20H4V6.916L6.416 4h11.15L20 6.954v4.355q-.206-.059-.437-.082q-.23-.023-.447-.023H19V7.808h-4v5.152q-.279.192-.554.516t-.4.634L12 13.096l-3 1.5V7.808H5V19h8.523q.09.28.224.524q.134.243.284.476m4.565.596v-3h-3v-1h3v-3h1v3h3v1h-3v3z");
}
</style><path class="bkxrps3ph"/>`,
		"fallback": "material-symbols-light:box-add-outline-sharp",
	});
}

export default Component;
