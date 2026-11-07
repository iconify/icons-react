import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ghtf89dkg.css';
import '../../css/b/bjgohipju.css';
import '../../css/l/lu24cmbkp.css';
import '../../css/o/oj2nvrb7f.css';
import '../../css/y/y3zm_elhs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ghtf89dkg"/><path clip-rule="evenodd" class="bjgohipju"/><path class="lu24cmbkp"/><path class="oj2nvrb7f"/><path class="y3zm_elhs"/>`,
		"fallback": "solar:flashlight-on-outline",
	});
}

export default Component;
