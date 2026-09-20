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
		"content": `<style>.r7i2283ug {
  fill: currentColor;
  d: path("m8.523 6l-1-1h12.323v1zm9.474 6.5q.29 0 .483-.2q.193-.202.193-.47q0-.29-.193-.483t-.488-.193q-.273 0-.469.193t-.196.488q0 .273.2.469q.201.196.47.196m-3.19-3.73h6.385v9.9l-1-1v-7.9h-4.384v3.515l-1-1zm5.116 12.915L17.239 19h-2.431v-2.43L5 6.741v8.874h7.039v1H4V5.742l-2.03-2.03l.707-.708l17.954 17.973zM3 19v-1h9.039v1zm6.427-7.811");
}
</style><path class="r7i2283ug"/>`,
		"fallback": "material-symbols-light:devices-off-outline-sharp",
	});
}

export default Component;
