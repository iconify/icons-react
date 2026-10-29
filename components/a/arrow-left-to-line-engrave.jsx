import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/hlkyzpb5b.css';
import '../../css/g/gjmv2fbbd.css';
import '../../css/x/xpcuehkpf.css';
import '../../css/j/j579kzbfd.css';
import '../../css/z/z_db1muvc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="hlkyzpb5b wm-k"/><path class="gjmv2fbbd wm-a"/><path class="wm-shadow xpcuehkpf"/><path class="j579kzbfd wm-a"/><path class="wm-k z_db1muvc"/></g>`,
		"fallback": "withicons:arrow-left-to-line-engrave",
	});
}

export default Component;
