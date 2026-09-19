import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/r/rll17gssz.css';
import '../../css/k/kqk465kfy.css';
import '../../css/o/o52d4pben.css';
import '../../css/n/n3d7nbb7f.css';
import '../../css/x/xfjre4dkv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="rll17gssz"/><path class="kqk465kfy"/><path class="o52d4pben"/><path class="n3d7nbb7f"/><path class="xfjre4dkv"/></g>`,
		"fallback": "icon-park:chef-hat-one",
	});
}

export default Component;
