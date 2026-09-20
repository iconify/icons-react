import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s7x5h9bzy.css';
import '../../css/g/gb5spskhg.css';
import '../../css/q/qflxr72yy.css';
import '../../css/j/j4_0w4bsk.css';
import '../../css/b/b9a2ss6dc.css';
import '../../css/t/ta7ar5bas.css';
import '../../css/s/snp287xku.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s7x5h9bzy"/><path class="gb5spskhg"/><path class="qflxr72yy"/><path class="j4_0w4bsk"/><path class="b9a2ss6dc"/><path class="ta7ar5bas"/><path class="snp287xku"/>`,
		"fallback": "streamline-emojis:india",
	});
}

export default Component;
