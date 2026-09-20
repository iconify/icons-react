import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1mjunbsu.css';
import '../../css/u/ulv8ns-jt.css';
import '../../css/s/s53vmbcgz.css';
import '../../css/d/drf7uhb7i.css';
import '../../css/h/hhf5g-bzn.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG5fPdudBK"><mask id="SVGTGBsVcVX" class="n1mjunbsu"><path class="ulv8ns-jt"/></mask><g class="s53vmbcgz"><path mask="url(#SVGTGBsVcVX)" class="drf7uhb7i"/><path class="hhf5g-bzn"/></g></mask></defs><path mask="url(#SVG5fPdudBK)" class="w49j0rbvv"/>`,
		"fallback": "lets-icons:folder-dublicate-duotone-line",
	});
}

export default Component;
