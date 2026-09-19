import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv130ab-t.css';
import '../../css/c/cu5xsb1ef.css';
import '../../css/e/eoa4dibgk.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGnm00Pesq"><g class="hv130ab-t"><rect class="cu5xsb1ef"/><path class="eoa4dibgk"/></g></mask></defs><path mask="url(#SVGnm00Pesq)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:alignment-horizontal-center",
	});
}

export default Component;
