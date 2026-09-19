import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/f/fv27g2bcl.css';
import '../../css/o/o97bhjbta.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG09G3yFvg"><g class="s9cl3zbei"><path class="fv27g2bcl"/><path class="o97bhjbta"/></g></mask></defs><path mask="url(#SVG09G3yFvg)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:file-cabinet",
	});
}

export default Component;
