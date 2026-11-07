import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kek-0ac7m.css';
import '../../css/e/evrj4pbat.css';
import '../../css/e/esqkcaber.css';
import '../../css/x/xszwamk2u.css';
import '../../css/m/m2r6mf4ux.css';
import '../../css/r/r9ey9xb6d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kek-0ac7m"/><path class="evrj4pbat"/><path class="esqkcaber"/><path class="xszwamk2u"/><path class="m2r6mf4ux"/><path clip-rule="evenodd" class="r9ey9xb6d"/>`,
		"fallback": "solar:flashlight-on-bold",
	});
}

export default Component;
