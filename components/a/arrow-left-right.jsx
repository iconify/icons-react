import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/g/gbgainu9d.css';
import '../../css/w/wnisdfbfp.css';
import '../../css/o/okn4ugb4f.css';
import '../../css/x/xblv9e62x.css';
import '../../css/d/dh6s3uory.css';
import '../../css/d/dsuspebxf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="gbgainu9d wm-shadow"/><path class="wnisdfbfp"/><path class="okn4ugb4f"/><path class="xblv9e62x"/><path class="dh6s3uory wm-shine"/><path class="dsuspebxf wm-deco"/></g>`,
		"fallback": "withicons-sticker:arrow-left-right",
	});
}

export default Component;
