import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vc39es8np.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/b2u-o9mvb.css';
import '../../css/t/tmlpzdv0s.css';
import '../../css/x/xgp9xq0-j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary vc39es8np"/><g class="dt0cm9dhy primary"><path class="b2u-o9mvb"/><path class="tmlpzdv0s"/><path class="xgp9xq0-j"/></g>`,
		"fallback": "iconaut:hard-drive-duo",
	});
}

export default Component;
