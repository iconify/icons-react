import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zbc6z0ers.css';
import '../../css/s/s5gh9gbtv.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zbc6z0ers"/><path class="s5gh9gbtv"/>`,
		"fallback": "devicon:ceph-wordmark",
	});
}

export default Component;
