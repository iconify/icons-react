import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/g/g8_nrgi4b.css';
import '../../css/i/iophxlriz.css';
import '../../css/h/hnhys6btg.css';
import '../../css/m/m9ya92jbs.css';
import '../../css/m/mghzbn9zx.css';
import '../../css/c/cg2q75bde.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGzfZbbdoF"><g class="s9cl3zbei"><path class="g8_nrgi4b"/><rect class="iophxlriz"/><path class="hnhys6btg"/><path class="m9ya92jbs"/><path class="mghzbn9zx"/><path class="cg2q75bde"/></g></mask></defs><path mask="url(#SVGzfZbbdoF)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:hotel",
	});
}

export default Component;
