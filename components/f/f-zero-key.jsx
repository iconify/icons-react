import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/g/g47cb4b4t.css';
import '../../css/o/ome6rvb5k.css';
import '../../css/y/y-aa40bwx.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG1V0Lfe2F"><g class="wwvp95byt"><rect class="g47cb4b4t"/><rect class="ome6rvb5k"/><path class="y-aa40bwx"/></g></mask></defs><path mask="url(#SVG1V0Lfe2F)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:f-zero-key",
	});
}

export default Component;
