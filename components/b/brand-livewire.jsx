import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tebjy0bqb.css';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/z69-7fbuk.css';
import '../../css/j/jy5-5kb7n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGq1vnPeix" class="tebjy0bqb"/></defs><g class="nrj6p8qat"><use href="#SVGq1vnPeix"/><use href="#SVGq1vnPeix"/><path class="z69-7fbuk"/><path class="jy5-5kb7n"/></g>`,
		"fallback": "tabler:brand-livewire",
	});
}

export default Component;
