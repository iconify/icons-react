import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/v/vxysmzw3k.css';
import '../../css/y/yfs_czbgj.css';
import '../../css/i/iaf4m8_yn.css';
import '../../css/u/uulr82dkw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><path clip-rule="evenodd" class="vxysmzw3k"/><path class="yfs_czbgj"/><path class="iaf4m8_yn"/><path class="uulr82dkw"/></g>`,
		"fallback": "icon-park:delete-themes",
	});
}

export default Component;
