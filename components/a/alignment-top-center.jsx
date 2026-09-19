import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv130ab-t.css';
import '../../css/c/cu5xsb1ef.css';
import '../../css/j/jos98yb-f.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGDYbNNdeD"><g class="hv130ab-t"><rect class="cu5xsb1ef"/><path class="jos98yb-f"/></g></mask></defs><path mask="url(#SVGDYbNNdeD)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:alignment-top-center",
	});
}

export default Component;
