import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d69qx8wnb.css';
import '../../css/y/yk8gzfbyb.css';
import '../../css/g/gjhu6jbtz.css';
import '../../css/w/wpa-0dsyc.css';
import '../../css/q/qia92gbmg.css';
import '../../css/y/y1xdnzb2b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d69qx8wnb wm-shadow"/><path class="wm-k yk8gzfbyb"/><path class="gjhu6jbtz wm-k"/><path class="wm-k wpa-0dsyc"/><path class="qia92gbmg wm-k"/><path class="wm-shine y1xdnzb2b"/>`,
		"fallback": "withicons-pastel:ban",
	});
}

export default Component;
