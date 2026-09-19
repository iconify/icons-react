import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/i/io1qadzfc.css';
import '../../css/d/d59gqabzx.css';
import '../../css/t/trq0gv3dc.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGMLsYnb9M"><g class="wwvp95byt"><path class="io1qadzfc"/><circle class="d59gqabzx"/><path class="trq0gv3dc"/></g></mask></defs><path mask="url(#SVGMLsYnb9M)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:big-clock",
	});
}

export default Component;
