import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/l/lyvb5g3tc.css';
import '../../css/p/p4hvhac_x.css';
import '../../css/o/o6lexionm.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGPF5ztdPr"><g class="wwvp95byt"><path class="lyvb5g3tc"/><path class="p4hvhac_x"/><path class="o6lexionm"/></g></mask></defs><path mask="url(#SVGPF5ztdPr)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:badge-two",
	});
}

export default Component;
